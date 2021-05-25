var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const submit_btn = document.querySelector(".submit_btn");
/*submit_btn.addEventListener("click", (e:Event) => {
    console.log("id_val: ",id_val.value);
    e.preventDefault();
    addDetails();
})*/
const addDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    const id_val = document.querySelector(".id_val");
    const author_val = document.querySelector(".author_val");
    const price_val = document.querySelector(".price_val");
    const data = {
        myid: id_val.value,
        author: author_val.value,
        price: price_val.value
    };
    yield fetch("http://localhost:5000/book/fetch/", { method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
        mode: "no-cors"
    });
    //window.location.replace("default.html")
});
export { addDetails };
