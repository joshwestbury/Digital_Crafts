
--What are all projects that use JavaScript?

SELECT * FROM tech, project WHERE tech.name = 'JavaScript';

--What are all technologies used by the Personal Website?

SELECT * FROM project, tech WHERE project.name = 'Personal Website';

--Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?

SELECT * FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
		WHERE project_id IS NULL;

--Based on the previous query, get the count of the number of techs used by each project.


SELECT project.name, COUNT(tech_id) FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
	GROUP BY project.name;

--Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?


SELECT * FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
		WHERE tech_id IS NULL;

--Based on the previous query, get the count of the number of projects that use each tech.


SELECT tech.name, COUNT(project_id) AS amount_of_projects FROM tech
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.tech_id = tech.id
	GROUP BY tech.name;

--List all projects along with each technology used by it. You will need to do a three-way join.


SELECT project.name, tech.name FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
	LEFT OUTER JOIN tech
		ON project_uses_tech.tech_id = tech.id;

--List all the distinct techs that are used by at least one project.

SELECT tech.name, COUNT(project_id) FROM tech
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.tech_id = tech.id
		WHERE tech_id IS NOT NULL
	GROUP BY tech.name;

--List all the distinct techs that are not used by any projects.

SELECT tech.name, COUNT(project_id) FROM tech
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.tech_id = tech.id
		WHERE tech_id IS NULL
	GROUP BY tech.name;

--List all the distinct projects that use at least one tech.


SELECT project.name, COUNT(tech_id) FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
		WHERE project_id IS NOT NULL
	GROUP BY project.name;

--List all the distinct projects that use no tech.


SELECT project.name, COUNT(tech_id) FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
		WHERE project_id IS NULL
	GROUP BY project.name;

--Order the projects by how many tech it uses.

SELECT project.name, COUNT(tech.id) FROM project
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.project_id = project.id
	LEFT OUTER JOIN tech
		ON project_uses_tech.tech_id = tech.id
		GROUP BY project.name
		ORDER BY COUNT;

--Order the tech by how many projects use it.

SELECT tech.name, COUNT(project.id) FROM tech
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.tech_id = tech.id
	LEFT OUTER JOIN project
		ON project_uses_tech.project_id = project.id
		GROUP BY tech.name
		ORDER BY COUNT;

--What is the average number of techs used by a project?

SELECT tech.name, AVG(project.id) FROM tech
	LEFT OUTER JOIN project_uses_tech
		ON project_uses_tech.tech_id = tech.id
	LEFT OUTER JOIN project
		ON project_uses_tech.project_id = project.id
		GROUP BY tech.name
		ORDER BY AVG;
