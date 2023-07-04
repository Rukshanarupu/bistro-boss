** JWT 
1. npm install jsonwebtoken 
2. const jwt = require('jsonwebtoken'); <!-- in index.js -->
3. fro secret key: 
   (control+j) node ----> enter ----> require('crypto').randomBytes(64).toString('hex') ---->enter
4. In server side: app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

      res.send({ token })
    })
5. In client side: after setUser of useEffect in authProvider
    // get and set token
    if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data =>{
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }

6. than it must be verify  <!--verify explained in 78.8 -->
    const verifyJWT = (req, res, next) => {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(401).send({ error: true, message: 'unauthorized access' });
        }
        // bearer token
        const token = authorization.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
            return res.status(401).send({ error: true, message: 'unauthorized access' })
            }
            req.decoded = decoded;
            next();
        })
    }

7. than "verifyJWT" include in all email related app.get and add
    const decodedEmail = req.decoded.email;
    if (email !== decodedEmail) {
    return res.status(403).send({ error: true, message: 'porviden access' })
    }
8. In client side: its related fetch
    const token = localStorage.getItem('access-token');
    const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { 
        headers: {
        authorization: `bearer ${token}`
    }})

9. check admin (78.10)
   verify admin (78.11)

11. payment gateway
https://stripe.com/docs/stripe-js/react
https://github.com/stripe/react-stripe-js

 


https://jwt.io/libraries
https://github.com/auth0/node-jsonwebtoken
https://www.npmjs.com/package/jsonwebtoken