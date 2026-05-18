import { ReactNode } from "react";

import { About, Zines, Art, Sewing } from "./pages";

import test from "./../../public/images/zines/pengiunscover.png"
export type WebsiteData={pages:PageData[], websiteTitle:string, zines:ZineData[], art: ArtData[]}

export type PageData ={
  image?: string;
  imageAltText?: string
  title: string;
  pageContent: (websiteData: any) => ReactNode ;
}

export type ExternalLink ={
  title: string,
  url: string
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
  externalLink?: ExternalLink

}

const websiteData:WebsiteData = {
  pages: [
    {
      title: "About",
      pageContent:About,
    },

    {
      title: "Visual Art",
      pageContent: Art,
    },
       {
      title: "Zines",
      pageContent: Zines,
    },
    { title: "Sewing Lessons",
      pageContent: Sewing,
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
            externalLink:{ title: "Watch On Vimeo", url: "https://vimeo.com/702455038?fl=pl&fe=vl"

            }

    },
    { 
      title: "Self Love Collection",
      coverImage: "./images/art/quilt.jpg",
            description:"I was a feature artist at Eight Rose Gallery with a quilt collection about self love."

    },
  ],

  websiteTitle: "Clarissa Kleveno",
};

export default websiteData;
