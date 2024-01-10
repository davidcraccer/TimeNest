import { Link } from 'react-router-dom';
import "./Chat.css";

const Chat = () => {
  return (
    <div className="container my-5 h-100">
      <div className="row">
        {/* Left Container - Sidebar */}
        <div className="col-md-4">
          <div className="sidebar">
            <h2>Profiles</h2>
            {/* Profile 1 */}
            <Link to="/chat/1" className="profile-link">
              <div className="profile">
                <img
                  src="path_to_profile_image_1.jpg"
                  alt="Profile 1"
                  className="profile-picture"
                />
                <span className="profile-name">John Doe</span>
              </div>
            </Link>

            {/* Profile 2 */}
            <Link to="/chat/2" className="profile-link">
              <div className="profile">
                <img
                  src="path_to_profile_image_2.jpg"
                  alt="Profile 2"
                  className="profile-picture"
                />
                <span className="profile-name">Jane Smith</span>
              </div>
            </Link>

            {/* Add more profiles as needed */}
          </div>
        </div>

        {/* Right Container - Chat */}
        <div className="col-md-8">
          <div className="chat-container">
            {/* Chat Container */}
            <div className="chat-box">
              {/* Chat messages go here */}
              <div className="message">Sender: Hello!</div>
              <div className="message">Receiver: Hi there!</div>
              {/* Add more messages as needed */}
            </div>

            {/* Typing Input Container */}
            <div className="typing-input-container">
              {/* Input field and send button go here */}
              <input type="text" className="form-control" placeholder="Type your message" />
              <button className="btn btn-primary mt-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
