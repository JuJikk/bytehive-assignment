import React from "react";

export interface NavItem {
    id: number;
    title: string;
    link: string;
    icon: React.ReactElement;
    active?: boolean;
}