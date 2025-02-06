//export deafault

//exported funcion sintaxis async
exports.conectToDatabase = async(dataName) => {
    console.log('connected to database\n' + dataName);
}

exports.disconnectToDatabase = (dataName)  => {
    console.log('disconnected to database' + dataName);
}