# Real-Time Tracker [Backend Project 🚀]

A real-time location tracking application using Node.js, Express, Socket.IO, and Leaflet.

## Features

- Real-time location tracking of connected users.
- Display of user locations on an interactive map.
- Automatic updates of user positions as they move.
- Removal of user markers when they disconnect.

## Technologies Used

- **Frontend**: EJS, Leaflet.js, HTML, CSS
- **Backend**: Node.js, Express.js, Socket.IO
- **Geolocation**: Browser Geolocation API

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/avik-halder/Real-Time-Tracker.git
    ```

2. Navigate to the project directory:
    ```sh
    cd real-time-tracker
    ```

3. Install the dependencies:
    ```sh
    npm i express ejs socket.io
    ```

### Running the Application

1. Start the server:
    ```sh
    npx nodemon app.js
    ```

2. Open your web browser and navigate to `http://localhost:3000`


## Usage

- When a user connects, their location will be sent to the server and displayed on the map.
- The map will automatically update as the user's location changes.
- When a user disconnects, their marker will be removed from the map.

## Screenshots

### Map View
![Map View](/assests/demo.png)

## Contributing

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Leaflet.js](https://leafletjs.com/)
- [Socket.IO](https://socket.io/)
- [OpenStreetMap](https://www.openstreetmap.org/)
