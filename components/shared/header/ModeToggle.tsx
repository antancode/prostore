'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
    const [mount, setMount] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMount(true);
    },[]);

    if(!mount) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    {
                        theme === 'system' ? <SunMoon /> :
                        theme === 'dark' ? <MoonIcon /> :
                        <SunIcon />
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ModeToggle;