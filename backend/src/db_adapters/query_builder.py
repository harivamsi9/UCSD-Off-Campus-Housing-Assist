#Template: https://death.andgravity.com/query-builder-how

class Query:     

    def __init__(self, data=None, separators=None):
        self.select_how_many = "*"
        self.from_table = None
        self.conditions = []

    def set_from(self, table: str):
        self.from_table = str(table)
    
    def add_condition(self, column:str, sign:str, value, isColumnString:bool):
        if sign not in ["<", ">", "<=", ">=", "="]:
            print(f"sign: {sign} not implemented in query condition")
            raise ValueError()
        condition = column + sign
        if isColumnString:
            condition += "'" + value + "'"
        else:
            condition += value
        self.conditions.append(str(condition))

    def __str__(self):
        if self.from_table is None:
            raise ValueError("From table is not defined")
        
        query = "SELECT " + self.select_how_many + " FROM " + self.from_table
        
        numConditions = len(self.conditions)
        for i, condition in enumerate(self.conditions):
            if i == 0:
                query += " WHERE"
            query += " " + str(condition) + " "
            if i < numConditions - 1:
                query += "AND"            
        
        return query

    





