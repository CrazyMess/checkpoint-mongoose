const mongoose = require('mongoose')
require('dotenv').config()
const Person = require('./models/person');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => console.log('Database connected successfully')
)
.catch(
    err => console.error('Database connection error:', err)
);

createAndSavePerson = () =>{
    person = new Person({
        name: "Zina",
        age: 32,
        favoriteFoods: ["xxx","yyy"] 
    })
    person.save().then((err, data) => {
        if (err) {
          console.error('Error saving the person:', err);
        } else {
          console.log('Person saved successfully:', data);
        }
      })
}

addFood = (id,food) =>{
    
    Person.findById(id).then((err,person)=>{
        if(err){
            console.error(err)
        } else {
            person.favoriteFoods.push(food)
            person.save().then((err, data) => {
                if (err) {
                  console.error('Error saving the person:', err);
                } else {
                  console.log('Person saved successfully:', data);
                }
              })
        }
    })

}
addFood(ObjectId("6710174a2dd0dea72b21ca7b"),"lasagne")

