
console.log("Users frontend javascript file");
$(function(){
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        const memberStatus = $(`#${id}.member-status`).val();

        axios.post(
            "/admin/user/edit", 
            { _id: id, memberStatus: memberStatus}
            )
            .then(response => {
                console.log(response)
                const result = response.data;
                if(result.data) {
                    $(".member-status").blur();
                } else {
                    alert("User update failed");
                }
            }).catch(err => {
                console.log(err);
                alert("Update failed")
            })
        }   
    )
})