-- create database interview_test_SW_PCG;

-- use interview_test_SW_PCG;

CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Grade INT
);

INSERT INTO Students (ID, Name, Grade) 
VALUES 
(1, 'John Smith', 4),
(2, 'Brittany Paul', 8),
(3, 'Chris Young', 2);

-- select * from Students;

CREATE TABLE Teachers (
    ID INT PRIMARY KEY,
    Name VARCHAR(50)
);

INSERT INTO Teachers (ID, Name) 
VALUES 
(1, 'Deb Sibler'),
(2, 'Elwin Artis'),
(3, 'Mark Covert');

-- select * from Teachers;

CREATE TABLE StudentTeacherAssoc (
    StudentID INT,
    TeacherID INT
);

INSERT INTO StudentTeacherAssoc (StudentID, TeacherID) 
VALUES 
(1, 1),
(2, 3),
(3, 2),
(1, 2);

-- select * from StudentTeacherAssoc;

SELECT 
    Name AS Teacher, COALESCE(u.StudentCount, 0) StudentCount
FROM
    Teachers t
        LEFT JOIN
    (SELECT 
        ste.TeacherID AS ID, COUNT(s.ID) StudentCount
    FROM
        Students s
    LEFT JOIN StudentTeacherAssoc ste ON ste.StudentID = s.ID
    WHERE
        s.Grade BETWEEN 1 AND 5
    GROUP BY ste.TeacherID) u ON t.ID = u.ID
GROUP BY t.ID
ORDER BY StudentCount DESC;














