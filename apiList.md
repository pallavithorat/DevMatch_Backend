# DevTinder APIs
## authRouter
- POST /signup
- POST /login
- POST /logout
## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password //forgot password API
## connectionRequestRouter

- POST /request/send/:status/:userId     //dynamic status

- POST /request/review/:status/:requestId


## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platform 
Status: ignore, interested, accepeted, rejected

