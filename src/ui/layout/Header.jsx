'use client'

import Button from '../components/Button'

import { Link, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { IsLogged } from '../../services/homeServices'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
    const navigate = useNavigate()

    const [authToken, setAuthToken] = useState()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
      const token = localStorage.getItem("authToken")
      if(token){
        setAuthToken(token)
      }
    }, [])
    

    const handleClickDeslogar = () => {
        setAuthToken("")
        localStorage.removeItem("authToken")
        navigate("/")
    }

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="src\assets\mainIcon.png" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    {/* <Link to={"/almoxarifado"} className="text-sm font-semibold leading-6 text-gray-900">
                        Almoxarifado
                    </Link> */}

                </PopoverGroup>
                {IsLogged(authToken) ?
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Button
                            onClick={handleClickDeslogar}
                            className="text-sm font-semibold leading-6 text-gray-900" >
                            Deslogar  <span aria-hidden="true">&rarr;</span>
                        </Button>
                    </div>
                    :
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to={"/entrar"} className="text-sm font-semibold leading-6 text-gray-900">
                            Entrar  <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                }
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="src\assets\mainIcon.png"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            {IsLogged(authToken) ?
                                <div className="py-6">
                                    <Button
                                        onClick={handleClickDeslogar}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" >
                                        Deslogar  <span aria-hidden="true">&rarr;</span>
                                    </Button>
                                </div>
                                :
                                <div className="py-6">
                                    <Link to={"/entrar"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Entrar <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}