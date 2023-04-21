import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div>
            <div>
                <Image
                    src='https://links.papareact.com/f90'
                    width={150}
                    height={150}
                />
            </div>
        </div>
        {/* Bottom Nav */}
        <div></div>
    </header>
  )
}

export default Header