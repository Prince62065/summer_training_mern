exports.register=(req,res)=>{
    const {name,password}= req.body || {};
      if (!name || !password) {
    return res.status(400).json({ message: 'Name and password are required.' });
  }
  return   res.status(200).send({message:`${name} have successfully register`});
};

exports.login=(req,res)=>{
  
}