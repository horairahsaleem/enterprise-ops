Users Table
•	id (UUID)      string
•	name           string
•	email          string
•	passwordHash    striing 
•	role (enum: Admin | Manager | Employee) string
•	teamId (foreign key)    because user depends on tea, 
Teams Table
•	id                string
•	name                string
•	managerId         user id fk
•	createdAt / updatedAt  timestamp  
Tasks Table
•	id
•	title    string
•	description    string
•	assignedTo (userId)   fk 
•	teamId                 fk
•	status (enum: Todo | InProgress | Done)   Enum 
•	priority (Low | Medium | High)    Enum 
•	dueDate                 date 
•	createdAt / updatedAt   time stamp 
Optional: Resources Table
•	id               string
•	name           string 
•	assignedTo (userId or teamId)   fk 
•	type        string 
•	createdAt / updatedAt   time stamp