export default (Func) => (req,res,next) =>{
    Promise.resolve(Func(req,res,next)).catch(next)
}