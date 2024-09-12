import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <div className="bg-red-500 rounded-xl">
          <div>
            <div className="text-xl font-large text-black">Seocat</div>
            <p className="text-xl text-slate-500">Gyats and services</p>
          </div>  
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
