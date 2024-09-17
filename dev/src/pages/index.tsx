import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import seocat from "../images/seocat.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex h-screen bg-sc-beige font-semibold text-4xl">
      <div className="m-auto w-1/3">
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img className="mx-auto mt-6" src={seocat}></img>
            <p className="text-center m-3">coming soon!</p>
            <p className="text-center m-3">portfolio, shop and more!</p>
          </div>  
        </div>
        <div className="rounded-3xl bg-white mt-6 p-6">
          <p className="text-center m-3">follow me on <a href="https://www.instagram.com/_seocat/">instagram</a> for updates! </p> 
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
