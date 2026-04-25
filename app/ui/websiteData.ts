import { ReactNode } from "react";

import { Section1, Section2, Section3 } from "./pages";

export type PageData ={
    image?: string;
    imageAltText?: string
    title: string;
    pageContent: ReactNode ;
}

const websiteData: {pages:PageData[], websiteTitle:string}= {
  pages: [
    {
      title: "Section 1",
      imageAltText: "an orange slice on a purple background with a sideways winky face on top",
      pageContent: Section1(),
      image: "./images/image1.png",
    },

    {
      title: "Section 2",
      pageContent: Section2(),
    },

    {
      title: "Section 3",
      pageContent: Section3(),
      imageAltText: "alternating oranges and orange slices in a grid pattern on a purple background",
      image: "./images/image3.png",
    },
  ],

  websiteTitle: "Website Title",
};

export default websiteData;
