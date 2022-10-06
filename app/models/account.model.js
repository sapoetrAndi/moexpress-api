module.exports = (mongoose) => {
  const schema = mongoose.Schema (
    {
      username : String,
      password : String
    },
    { timestamps : true }
  )

  schema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
  })

  const Account = mongoose.model("accounts", schema)
  return Account
}