import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

function Tours() {
  return (
    <div>
        <div className="h-full">
            <div className="flex flex-col">
                <h1 className='text-7xl font-cinageo_medium' >Explore our Campsites</h1>
                <div className="flex flex-row">
                    <div className="">
                        <Card>
                            <CardHeader>
                                <img src="" alt="" />
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tours