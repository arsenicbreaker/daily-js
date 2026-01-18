function FormExample() {
 const handleSubmit = (e) => {
 e.preventDefault() // Cegah reload page
 console.log("Form submitted!")
 }
 return (
 <form onSubmit={handleSubmit}>
 <input type="text" name="username" />
 <button type="submit">Submit</button>
 </form>
 )
}

export default FormExample