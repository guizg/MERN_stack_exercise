module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nome: String,
            sobrenome: String,
            cpf: String,
            email: String,
            company_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'company',
                required: true
              }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Employee = mongoose.model("employee", schema);
    return Employee;
  };