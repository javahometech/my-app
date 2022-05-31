def lambda_handler(event, context):
    con = pymssql.connect(
            server="",
            user="",
            password="",
            port="",
            database="Foo"
        )
    # con.autocommit(True)
    cur = con.cursor()
    # cur.execute("CREATE DATABASE Foo")
    # con.autocommit(False)
    cur.execute("CREATE TABLE STUDENTS(ID int, NAME varchar(255))")
    # cur.execute('msdb.dbo.rds_task_status')
    # print(cur.fetchone())
    cur.close()
