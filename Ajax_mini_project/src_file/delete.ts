const deleteOnlyRow = async (id_1: string) => { 
    const res = fetch("http://localhost:3000/Book/" + id_1,
    {
        method: "DELETE"
    }
    )
}
export { deleteOnlyRow } 