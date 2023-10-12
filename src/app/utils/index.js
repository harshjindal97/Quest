export const adminNavOptions = [
    {
        id:'adminListing',
        label:"Manage all products",
        path: "/admin-view/all-products"
    },
    {
        id:'adminListing',
        label:"Add new products",
        path: "/admin-view/add-products"
    }

]

export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Products",
      path: "/product/listing/all-products",
    },
    {
      id: "listingMen",
      label: "Men",
      path: "/product/listing/men",
    },
    {
      id: "listingWomen",
      label: "Women",
      path: "/product/listing/women",
    },
    {
      id: "listingKids",
      label: "kids",
      path: "/product/listing/kids",
    },
  ];


  export const styles = {
    button:"mt-1.5 bg-black inline-block px-5 py-3 uppercase text-white font-large" 
  }

  export const loginFormControl = [
    
    {
      id:"Email",
      type:"Email",
      placeholder:"Enter Your Email",
      label:"Email",
      componentType:"input"
    },
    {
      id:"Password",
      type:"password",
      placeholder:"Enter Your Password",
      label:"Password",
      componentType:"input"
    },
    
  ] 
  export const registrationFormControl = [
    {
      id:"name",
      type:"text",
      placeholder:"Enter Your Name",
      label:"Name",
      componentType:"input"
    },
    {
      id:"email",
      type:"email",
      placeholder:"Enter Your Email",
      label:"Email",
      componentType:"input"
    },
    {
      id:"password",
      type:"password",
      placeholder:"Enter Your Password",
      label:"Password",
      componentType:"input"
    },
    {
      id:"role",
      type:"",
      placeholder:"",
      label:"",
      componentType:"select",
      options:[
        {
          id:"admin",
          label:"Customer"
        },
        {
          id:"customer",
          label:"Admin"
        }
      ]
    }
  ]