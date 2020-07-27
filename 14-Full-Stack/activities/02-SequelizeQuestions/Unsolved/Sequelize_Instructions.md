* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	promis based node.js orm for servers

  	- Answer: What advantages does it offer?
	  easy to test, gives you support for syncing databases, validation. 

  	- Answer: How do I install it? How do I incorporate it into my app?
	npm install --save sequelize
	const Sequelize = require('sequelize);

  	- Answer: What the heck is a Sequelize model? What role will it play?
	A model is an abstraction that represents a table in your database
	mapping between a model and a table
	the model eliminates the need for a seperate ORM or another model

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

		const { Sequelize, DataTypes, Model } = require('sequelize);
		const sequelize = new Sequelize('sqlite::memory);

	var world = sequelize.define('world', {
		
			Country: {
				type: Sequelize.STRING,
			},
			PhoneCode: {
				type: Sequelize.STRING
			},
			Capital{
				type: Sequelize.STRING
			},
			IndependenceYear: {
				type: Sequelize.INTIGER
			}
	)};

		console.log(USer === sequelize.models.World);

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
