const users = [
    {
        id: 1,
        firstName: "cole",
        lastName: "anderson",
        userName: 'cole.anderson@vsgcommerce.com',
        password: 'password',
        emailOptIn: false
    },
    {
        id: 2,
        firstName: "Johnny",
        lastName: "Test",
        userName: "jt@test.com",
        password: 'password',
        emailOptIn: false
    }
]

const products = [
    {
        id: 1,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 1"
    },
    {
        id: 2,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 2"
    },
    {
        id: 3,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 3"
    },
    {
        id: 4,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 4"
    },
    {
        id: 5,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 5"
    },
    {
        id: 6,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 6"
    },
    {
        id: 7,
        img: "",
        listPrice: 32.99,
        salePrice: 10.99,
        productName: "Test Product 7"
    }
]

const newUser = {
    id: null,
    firstName: "",
    lastName: "",
    userName: '',
    password: '',
    emailOptIn: false
  };
  
  const product = {
    id: null,
    img: "",
    listPrice: 0.00,
    salePrice: 0.00,
    productName: ""
  }

// Using CommonJS style export so we can consume via Node without the use of Babel-node

module.exports = {
    users,
    products,
    newUser
}

