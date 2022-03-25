// add onclick event for delete buttons
function deletePasswordEvent() {
    let deleteButtons = document.querySelectorAll(".delete-button");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = () => {
            if(!confirm("Вы уверены что хотите удалить этот пароль?"))
                return;
            let parentDiv = deleteButtons[i].parentElement.parentElement.parentElement;
            const request = new Request(
                `${window.location.origin}/api/passwords/${parentDiv.id}`,
                { headers: { 'X-CSRFToken': getCookie('csrftoken'), 'content-type': 'application/json' } }
            );
            fetch(request, {
                method: 'DELETE',
                mode: 'same-origin'  // Do not send CSRF token to another domain.
            }).then(() => parentDiv.remove())
        }
    }
}