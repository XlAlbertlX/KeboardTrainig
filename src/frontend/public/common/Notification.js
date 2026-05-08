class Notification {
    message = "";
    isShown = false;

    constructor(message) {
        this.message = message;
    }

    show() {
        if(!this.isShown) {
            this.isShown = true;

            const notificationBlock = document.createElement("div");
            notificationBlock.classList.add("notification-block");

            const notificationTitle = document.createElement("h3");
            notificationTitle.classList.add("notification-block__title");
            notificationTitle.textContent = "Смените раскладку!"

            const notificationDescription = document.createElement("p");
            notificationDescription.classList.add("notificationBlock--description");
            notificationDescription.textContent = "Чтобы пользоваться тренажером, используйте изучаемую раскладку.";

            notificationBlock.append(notificationTitle);
            notificationBlock.append(notificationDescription);
            document.body.insertAdjacentElement("afterbegin", notificationBlock);


            this.setShowingDelay();
        }
    }

    setShowingDelay() {
        setTimeout(() => {
            this.isShown = false;
            document.querySelector(".notification-block").remove();
        }, 5000);

    }
}

export default Notification;