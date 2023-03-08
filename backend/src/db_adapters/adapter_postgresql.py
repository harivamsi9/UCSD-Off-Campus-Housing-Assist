from src.db_adapters.database_interface import DatabaseInterface
import psycopg2

class DbAdapterPostgreSQL(DatabaseInterface):    
    
    def __init__(self, config: dict):
        """
        Creates the connection to the DB

        Args:
            config (dict): requires at least these keywords:
            - database
            - user
            - host
            - port
        """
        self.connection = None
        self.cursor = None
        try:
            # read connection parameters
            params = {}
            params["database"] = config["database"]
            params["user"] = config["user"]
            params["host"] = config["host"]
            params["port"] = config["port"]
            params["password"] = config["password"]
            
            # connect to the PostgreSQL server and create the cursor
            print("----------------------------------------")
            print("Connecting to the PostgreSQL database...")
            self.connection = psycopg2.connect(**params)
            self.cursor = self.connection.cursor()
            print("CURSOR:=> ", self.cursor)
            print("Connection:=> ", self.connection)
            self.cursor.execute("SELECT * FROM property WHERE bedroom=2 AND bathroom=2")
            print(self.cursor.fetchall())
            
            
        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
        
        print("Connected!")
        print("----------------------------------------")
    
    
    def query(self, instruction: str) -> list[tuple]:
        print("this is in adapter_postSQL.py ")
        self.cursor.execute(instruction)
       
        print("instruction: ", instruction)
        return self.cursor.fetchall()
    
    
    def close_connection(self):
        self.cursor.close()
        if self.connection is not None:
            self.connection.close()
            print("Database connection closed.")
    
    
    def get_columns_names(self) -> list:
        colnames = [desc[0] for desc in self.cursor.description]
        return colnames