console.log("Products frontend javascript file");
$(function() {
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
        console.log(selectedValue);
        if(selectedValue === "DRINK") {
            $("#product-volume").show()
            $("#product-collection").hide()
        }
        else {
            $("#product-volume").hide()
            $("#product-collection").show()
        }
    })

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    })

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex");
    })

    $(".new-product-status").on("change", async function(e) {
        const id = e.target.id;
        const productStatus = $(`#${id}.new-product-status`).val();
        console.log(id);
        console.log(productStatus);

        try {
            const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
            const result = response.data;
            console.log(result);

            if(result.data){
                console.log("product updated");
                $(".new-product-status").blur()
            } else {
                alert("product update failed");
            }
        } catch(err) {
            console.log()
            alert("Product update failed!")
        }
    })
})
function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".pproduct-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    const productStatus = $(".product-status").val();
    if(
        productName === "" || 
        productPrice === "" || 
        productLeftCount === "" || 
        productCollection === "" || 
        productDesc === "" || 
        productStatus === "") {
            alert("Please insert all required information");
            return false;
        } else return true;

}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    
    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

            if(!validImageType.includes(fileType)) {
                alert("Please insert only jpeg, jpg or png");
            } else {
                if(file) {
                    const reader = new FileReader();
                    console.log(reader);
                    reader.onload = function () {
                        $(`#image-section-${order}`).attr("src", reader.result);
                    }
                    reader.readAsDataURL(file);
                }
            }

}