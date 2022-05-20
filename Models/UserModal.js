const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;

const UserSchema=new Schema({
    "UserName":{
        type:String,
        required:true,
    },
    "Name":{
        type:String,
        required:true,
    },
    "Email":{
        type:String,
        required:true,
    },
    "Password":{
        type:String,
        required:true
    },
    "ProfilePic":{
        type:String,
        required:false,
        default:'https://res.cloudinary.com/dcglxmssd/image/upload/v1645077067/ProfilePic/DefaultProfile_o0zbci.jpg'
    },
    "Description":{
        type:String,
        required:false,
        default:"Hi there!"
    },
    "Contacts":[
        {
            friend:{
                id:{
                    type:Schema.Types.ObjectId,
                    required:true,
                    ref:'User'
                }
            },
            conversationId:{
                type:Schema.Types.ObjectId,
                ref:"Conversation"
            },
            ref:this
        },
    ],
    "Notifications":{
        "notification":[
            {
                message:{
                    type:String,
                    required:false
                }
            }
        ],
        "Requests":[
            {
                from:{
                    type:Schema.Types.ObjectId,
                    ref:'User',
                    required:true
                }
            }
        ]
    },
    "Requested":[
        {
            To:{
                type:Schema.Types.ObjectId,
                required:true
            },
            Status:{
                type:String,
                default:"Pending",
                required:true
            }
        }
    ],
    IsOnline:{
        type:Boolean,
        required:false,
        default:false
    },
    socketId:{
        type:String,
        required:false
    },
    Type:{
        type:String,
        required:true,
        default:"Regular"
    },
    Inventory:[
        {
            Name:{
                type:String,
                required:true
            },
            Type:{
                type:String,
                required:true
            },
            Image:{
                type:String,
                required:false,
                default:"https://res.cloudinary.com/dcglxmssd/image/upload/v1648127476/Group_1_ot7swd.png"
            },
            Items:[
                {
                    ProductId:{
                        type:Schema.Types.ObjectId,
                        required:true,
                        ref:'Product'
                    }
                },
            ]
        }
    ],
    "Cart":{
        Items:[{
            ProductId:{
                type:Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            },
            Quantity:{
                type:Number,
                default:1,
                required:false
            }
        }]
    },
    "MyOrders":[
        {
            Items:[
                {
                    ProductId:{
                        type:Schema.Types.ObjectId,
                        ref:'Product',
                        required:true,
                    },
                    Quantity:{
                        type:Number,
                        required:true,
                    },
                    Status:{
                        type:String
                    },
                }
            ],
            TotalAmount:{
                type:String
            },
            time:{
                type:Date,
                default:Date.now()
            },
        },
    ],
    "Settings":{
        "Profile":{},
        "GeneralDetails":{
            Addresses:[
                {
                    FirstName:{
                        type:String
                    },
                    LastName:{
                        type:String
                    },
                    Address:{
                        type:String
                    },
                    State:{
                        type:String
                    },
                    District:{
                        type:String
                    },
                    PinCode:{
                        type:Number
                    },
                    Phone:{
                        type:Number
                    },
                }
            ],
            SelectedAddress:{
                type:Schema.Types.ObjectId,
                required:false
            }
        },
        "Payments":{}
    },
    "SalesOrder":[
        {
            Name:{
                type:String
            },
            Email:{
                type:String
            },
            Address:{
                type:String
            },
            PhoneNumber:{
                type:String
            },
            Item:[
                {
                ProductId:{
                    type:Schema.Types.ObjectId,
                    ref:"Product",
                },
                Quantity:{
                    type:Number
                }
            }],
            Status:{
                type:String,
            },
            time:{
                type:Date,
                default:Date.now()
            },
        },
        
    ]
});

UserSchema.methods.AddNotification=function(data){
    console.log(data);
}


module.exports=Mongoose.model("User",UserSchema);