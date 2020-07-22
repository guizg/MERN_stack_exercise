module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nome: String,
            nome_fantasia: String,
            cnpj: String,
            endereco: String,
            beneficios: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Company = mongoose.model("company", schema);
    return Company;
  };