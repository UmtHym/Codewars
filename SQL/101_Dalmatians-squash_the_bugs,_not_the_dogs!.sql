-- DESCRIPTION:

-- Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

-- By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

-- The number of dogs will always be a number and there will always be at least 1 dog.



-- # write your SQL statement here: 
-- you are given a table 'dalmatians' with column 'n' (int)
-- return a query with column 'n' and your result in a column named 'res' (text)
-- sort results by column 'n' ascending

SELECT n,
CASE
  when n <= 10 then  'Hardly any'
  when n <= 50 then 'More than a handful!'
  when n = 101 then '101 DALMATIANS!!!' 
  else 'Woah that''s a lot of dogs!' 
  END res
FROM dalmatians
ORDER BY 1 ASC;