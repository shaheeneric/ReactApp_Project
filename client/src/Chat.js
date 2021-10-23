import io from "socket.io-client"; 

const socket = io();



const Chat = () => {
    return (
        <div class="chat-container">
        <header class="chat-header">
            <h1><i className="fab fa-discord"></i> Discloned</h1>
            <a id="leave-btn" class="btn" href="/">Leave Room</a>
        </header>
        <main className="chat-main">
            <div className="chat-sidebar">
            <h3><i className="fas fa-comments"></i> Room Name:</h3>
            <h2 id="room-name"></h2>
            <h3><i className="fas fa-users"></i> Users</h3>
            <ul id="users"></ul>
            </div>
            <div className="chat-messages"></div>
        </main>
            <div className="chat-form-container">
                <form id="chat-form">
                <input
                    id="msg"
                    type="text"
                    placeholder="Enter Message"
                    required
                    autocomplete="off"
                />
                <button class="btn">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;