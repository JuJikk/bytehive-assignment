import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    height: 100vh;
`;

export const SidebarWrapper = styled.div`
    width: 240px;
    background-color: #1c2536;
`;

export const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const ContentArea = styled.div`
    flex: 1;
    padding: 0 1.5rem 1.5rem;
    background-color: #fff;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const HeaderArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const SyncButton = styled.button`
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background-color: #4f46e5;

    &:hover {
        background-color: #4338ca;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #e0e7ff;
    }
`;
