//pick up the model
//const restaurants = require('../models/restaurant.json')
const Restaurants = require('../models/restaurant')
const Locations = require('../models/location')
const fs = require('fs')
exports.getAllRestaurants=(req, res) => {


   Restaurants.find().then((result)=>{
    res.status(200).json({
                 message:"restaurants fetched successfully", 
                    data:result
        
           })
     }).catch((error)=>{
        res.status(500).json({
                  message:"DB error Occured",   
                  error: error
                 })
      });
}

exports.getAllLocation=(req, res) => {
    Locations.find()
    .then((result)=>{
        res.status(200).json({
            message:"restaurants fetched successfully", 
               data:result
   
      })
    })
    .catch((error)=>{
        res.status(500).json({
            message:"DB error Occured",   
            error: error
           })
    })
}
exports.getRestaurantDetails=(req, res) => {
    let criteria = {name:req.params.name}
    Restaurants.findOne(criteria)
    .then((result)=>{
        res.status(200).json({
            message:"restarant with given id fetched successfully",
            data:result
        })
    })
    .catch(error=>{
        res.status(500).json({
            message:"DB error Occured",   
            error: error
           })
    })
}
 exports.getRestaurantByCity=(req, res) => {
    let criteria = {city:req.params.cname}
    Restaurants.find(criteria)
        .then((result)=>{
            res.status(200).json({
                message:"restaurants fetched successfully", 
                data:result
            })
        })
        .catch(error=>{
            res.status(500).json({
                message:"DB error Occured",   
                error: error
               })
        })
    
        
}

<<<<<<< HEAD

exports.getAllRestaurantsByFilter=(req, res)=>{
    let filter = {}

    if(req.body.city_id){
        filter.city = req.body.city_id
    }
    let sort = 1;
    // console.log(req.body.sort)
    if(req.body.sort){
        sort = req.body.sort;

    }

    if(req.body.cuisine && req.body.cuisine.length > 0){
        filter['Cuisine.name'] = {$in: req.body.cuisine}
    }
    console.log("lcost",req.body.lcost);
    console.log("hcost",req.body.hcost)
    if(req.body.lcost !=='' && req.body.lcost == 0){
        filter.cost ={
            $lte :req.body.hcost
        }
    } else 
    if(req.body.lcost && req.body.hcost){

       
            filter.cost= {
                $lt: req.body.hcost,
                $gt: req.body.lcost
            } 
         
    }

    console.log(filter)
    Restaurants.find(filter).limit(2).skip(2*(req.params.pageNo - 1)).sort({cost : sort})
    .then(
        result=>{
            Restaurants.find(filter).count((err,count)=>{
                if(err)
                console.log(err)
                else
                res.status(200).json({ message:"data fetched successfully" , data:result ,totalRecords:count})
      
            })
             }
    ).catch(error=>{
            res.status(500).json({ message:"Error in database" , error:error })
    })
 
 }
=======
exports.getAllRestaurantsByFilter=(req, res) => {
    let filter = {}
    if(req.body.city_id){
        filter.city = req.body.city_id;
    }

    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name'] = {$in: req.body.cuisine}
    }
    if(req.body.lcost && req.body.hcost){
        if(req.body.lcost==0){
            filter.cost = {$lte: req.body.hcost}
        }
        else if(req.body.lcost && req.body.hcost){
        filter.cost = {$lt:req.body.hcost,$gt:req.body.lcost}}
    }
    let sort =1;
    if(req.body.sort){
        sort = req.body.sort
    }
    Restaurants.find(filter).limit(2).skip(2*(req.params.pageNo -1)).sort({cost:sort})
    .then((result)=>{
        res.status(200).json({
                     message:"restaurants fetched successfully", 
                        data:result
            
               })
         }).catch((error)=>{
            res.status(500).json({
                      message:"DB error Occured",   
                      error: error
                     })
          });
}
// exports.addRestaurant=(req, res) => {
//     restaurants.push(req.body)

//     //file operation
//     fs.writeFile('../models/restaurant.json',restaurants,()=>{

//     })
//     res.status(200).json({
//         message:"restaurants fetched successfully", 
//         data:restaurants
//     })
// }

// exports.UpdateRestaurant=(req, res)=>{
//     const index = restaurants.findIndex((item)=>item.name == req.body.name)
//     restaurants[index].city = req.body.city;
//     res.status(200).json({
//         message:"restaurants updated successfully", 
//         data:restaurants
//     })
// }

// exports.DeleteRestaurant=(req, res)=>{
//     const index = restaurants.findIndex((item)=>item.id == req.params.id);
//     restaurants.splice(index,1);
//     res.status(200).json({
//         message:"restaurants deleted successfully", 
//         data:restaurants
//     })
// }
>>>>>>> 61667e162d3b97e58f643ab2e39927baaf7314b7
