import abc


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
    if databaseType == "postgresql":
        from src.db_adapters.adapter_postgresql import DbAdapterPostgreSQL
        return DbAdapterPostgreSQL(config)
    else:
        print(f"Database adapter {databaseType} not implemented")
        raise NotImplementedError() 
    
    

    