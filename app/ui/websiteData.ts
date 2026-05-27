
export type WebsiteData={pages:Link[], websiteTitle:string, zines:ZineData[], art: ArtData[], lessons: LessonData[]}

export type Link ={
  title: string,
  path: string
}

export type ZineData ={
  title: string ;
  coverImage: string;
  readable?: string
  printable?: string;
}

export type ArtData ={
  title: string ;
  coverImage: string;
  imageCollection?: string[];
  description?: string;
  externalLink?: Link
}

export type LessonData={
  title: string;
  learn: string[];
  bring: string[];
  length: string;
}

const websiteData:WebsiteData = {
  pages: [
    {
      title: "About",
     path:'/'
    },

    {
      title: "Work",
      path:"/work"
    
    },

    { title: "Sewing Lessons",
    path:'sewing-lessons'
    }

  ],
  zines:[
    { 
      title: "Pengiuns and Self-Compassion",
      coverImage: "./images/zines/pengiunscover.png",
      printable:"downloads/pengiunsPrintable.pdf",
      readable:"downloads/pengiunsReadable.pdf"

    },
      { 
      title: "Ode to Sex Toys",
      coverImage: "./images/zines/sextoyscover.png",
      printable:"downloads/sextoysPrintable.pdf",
      readable:"downloads/sextoysReadable.pdf"

    },
      { 
      title: "Clarissa's Guide to non-alcholic Alchol",
      coverImage: "./images/zines/sobercover.png",
      printable:"downloads/soberPrintable.pdf",
      readable:"downloads/soberReadable.pdf"

    },
   
  ],
     art:[

    { 
      title: "Resilent Hearts Birthday Event Posters",
      coverImage: "./images/art/draft3.png",
      description:"Resilient Hearts Animal Sanctuary was celebrating their 7th year in operation with two events. The prompt was to create two posters which fit together to create one, but still capture the vibe of the different events. I contrasted the dark colors of the music fundraiser with the bright colors of the family fun centered street fair. "
    },
    { 
      title: "Clothing Swap",
      coverImage: "./images/art/clothingswap.png",
      description:"Sustainable Ballard hosts a quarterly clothing swap which I design posters for. I kept it simple with a bold graphic of shirt which eventually became the logo for the event."
    },
        { 
      title: "Captiol Hill Tool Library Community Mural (1)",
      coverImage: "./images/art/mural1.jpg",
            description:"I designed two murals to fill the parking garage at the Capitol Hill Tool Library. They were painted with help from the community. The items are meant to represent the range of items the tool library holds; gardening, woodworking, sewing, and craft supplies."

    },
    { 
      title: "Captiol Hill Tool Library Community Mural (2)",
      coverImage: "./images/art/mural2.jpg",
            description:"I designed two murals to fill the parking garage at the Capitol Hill Tool Library. They were painted with help from the community. The items are meant to represent the range of items the tool library holds; gardening, woodworking, sewing, and craft supplies."

    },
       { 
      title: "Community Lunch On Captiol Hill Video",
      coverImage: "./images/art/communitylunch.png",
            description:"I created a short video explaining the many offerings of Community Lunch On Capitol Hill.",
            externalLink:{ title: "Watch On Vimeo", path: "https://vimeo.com/702455038?fl=pl&fe=vl"

            }
    }
  ],
  lessons:[
    {title:"Sewing Machine for Beginners", 
      learn:["How the sewing machine works","Different stitches and what they are used for","How to set the machine for different fabrics","How to drive the machine","Construct a pratice project build confidence"],  
      bring:["Your sewing machine, otherwise you can use the one provided"], 
      length:"2 hours"},
  {title:"How to Hem", 
    bring:["Your sewing machine, otherwise you can use the one provided.", "1-4 garments that you would like create a new hem on"], 
    learn:["How to create a new hem on pants, skirts, dress or tops",
              "Techiques for different types of fabrics",
              "How to properly measure new length on garments"],
               length:"2 hours"},
    {title:"Waist Adjustments", 
    bring:["Your sewing machine, otherwise you can use the one provided.","1-4 garments that you would like adjust the waist on"], 
    learn:["How take in the waist on pants or skirts",
              "How to determine the best technique for different fabrics and waist construction",
             ],
               length:"2 hours"},
    {title:"Pocket Alterations", 
    bring:["Your sewing machine, otherwise you can use the one provided.","1-4 garments that you would like adjust or add pockets to"], 
    learn:["Pocket construction; how to draft and insert a pocket",
              "How to add a pocket to an existing garment",
              "How to expand a too small pocket in an existing garment"],
               length:"2 hours"},
    {title:"Mending and Repair", 
    bring:["Your sewing machine, otherwise you can use the one provided.","1-4 garments that you would like to repair.", "Any patch fabric matching the garment if avaialble"], 
    learn:["How to patch a hole in a existing garment",
              "How to fix a ripped seam",
              "How to reenforced pant crotches"
              ],
               length:"2 hours"},
    {title:"Zippers", 
    bring:["Your sewing machine, otherwise you can use the one provided."], 
    learn:["Different types of zippers and their purposes",
              "Different zipper insertion menthods",
              "Construct a simple zipper bag to build confidence"],
               length:"2 hours"},
     {title:"Project Help", 
    bring:["Your sewing machine, otherwise you can use the one provided.", "Your sewing project including its pattern, fabrics and any notions"], 
    learn:["How read sewing patterns",
       "How to cut fabric from a pattern",
              "Assistance on construction or new techniques"
             ],
               length:"2 hours"}
   ],
  websiteTitle: "Clarissa Kleveno",
};

export default websiteData;
