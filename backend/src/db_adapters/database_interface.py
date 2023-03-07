import abc
import json


class DatabaseInterface(metaclass=abc.ABCMeta):
    
    @classmethod
    def __subclasshook__(cls, subclass):
        return (hasattr(subclass, 'query') and 
                callable(subclass.query) and 
                hasattr(subclass, 'close_connection') and 
                callable(subclass.close_connection) or 
                NotImplemented)        
    

    @abc.abstractmethod
    def query(self, instruction: str) -> list[tuple]:
        """
        Runs the query in the db and returns the results

        Args:
            instruction (str): ex: "select * from student"

        Raises:
            NotImplementedError: _description_

        Returns:
            list[tuple]: ex: [(1,1), (2,1)]
        """
        raise NotImplementedError
    
    @abc.abstractmethod
    def close_connection(self):
        """
        Closes the connection to the database

        Raises:
            NotImplementedError:
        """
        raise NotImplementedError
    
    @abc.abstractmethod
    def get_columns_names(self) -> list:
        """
        Retrieves the column names of the last query

        Returns:
            list: 
        """
        raise NotImplementedError
    

def getDatabaseAdapter(config: dict):
    """
    Receives the configuration and returns an object to
    execute queries to the DB

    Args:
        config (dict): Json like:        
            * "type": "postgresql",
            * "name": "G15",
            * "user": "postgres",
            * "password": "1989",
            * "port": "5433"    

    Returns:
        DatabaseInterface: 
    """
    if "type" not in config:
        raise KeyError("type is not in the config")
    if "host" not in config:
        raise KeyError("host is not in the config")
    if "database" not in config:
        raise KeyError("database is not in the config")
    if "password" not in config:
        raise KeyError("password is not in the config")
    if "port" not in config:
        raise KeyError("port is not in the config")
    
    # Check for the types implemented
    databaseType = config["type"]
    adapter = None
    if databaseType == "postgresql":
        from src.db_adapters.adapter_postgresql import DbAdapterPostgreSQL
        adapter =  DbAdapterPostgreSQL(config)
    else:
        print(f"Database adapter {databaseType} not implemented")
        raise NotImplementedError()
    
    # Check the version before returning
    test_DB_schema(adapter)    
    return adapter


def test_DB_schema(adapter):
    """
    Tests if the current connection to the DB has the 
    latest version of the database
    """
    print("\nTesting DB version:")
    file = open("./database/database_schema.json")
    schema = json.load(file)
    
    for table in schema:
        adapter.query("select * from " + table + " limit 0")
        columns_in_query = adapter.get_columns_names()
        
        # The number of columns must match
        num_columns_in_schema = len(schema[table])
        num_columns_in_query = len(columns_in_query)
        if num_columns_in_query != num_columns_in_schema:
            print("Error: schema DB not updated")
            print(f"Table: {table}")
            print(f"# Columns in schema: {num_columns_in_schema}")
            print(f"# Columns in query: {num_columns_in_query}")
            print("They don't match! Please update your DB")
            raise ValueError()
        
        # The name must match exactly
        for i, column_in_table in enumerate(schema[table]):
            if (not(column_in_table == columns_in_query[i])):
                print("Error: schema DB not updated")
                print(f"Table: {table}")
                print(f"Column name in query: {columns_in_query[i]}")
                print(f"Column name in schema: {column_in_table}")
                print("They don't match! Please update your DB")
                raise ValueError()
    print("DB up to date!\n")
        
    

    