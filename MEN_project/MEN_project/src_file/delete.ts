const deleteOnlyRow = async (id_1: string) => { 
    const res = fetch("http://localhost:5000/book/" + id_1,
    {
        method: "DELETE"
    }
    )
}
export { deleteOnlyRow } 