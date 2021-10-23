const Home = () => {

    return (
        <div className="home">
            <main className="join-main">
				<form action="chat">
					<div className="form-control">
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
							required
						/>
                        <label for="password">Password</label>
                        <input
							type="text"
							name="password"
							id="password"
							placeholder="Enter password..."
							required
						/>
					</div>
					<div className="form-control">
						<label for="room">Room</label>
						<select name="room" id="room">
							<option value="Room1">Room1</option>
							<option value="Room2">Room2</option>
							<option value="Room3">Room3</option>
							<option value="Room4">Room4</option>
							<option value="Room5">Room5</option>
							<option value="Room6">Room6</option>
						</select>
					</div>
					<button type="submit" className="btn" >Join Chat</button>
				</form>
			</main>
        </div>
     );
}

export default Home;