import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/Button";
import { Loader2, Edit, Trash, Star, StarOff } from "lucide-react";
import { useContractTemplates } from "@/hooks/useContractTemplates";
import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "@/components/ui/alert-dialog";
import { useState } from "react";
export function TemplateList({ templates, isLoading, onSelect, onEdit }) {
    const [templateToDelete, setTemplateToDelete] = useState(null);
    const { deleteTemplate, setDefaultTemplate } = useContractTemplates();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleDeleteClick = (templateId) => {
        setTemplateToDelete(templateId);
    };
    const handleDeleteConfirm = async () => {
        if (templateToDelete) {
            await deleteTemplate.mutateAsync(templateToDelete);
            setTemplateToDelete(null);
        }
    };
    const handleSetDefault = async (templateId) => {
        if (!user) {
            navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`);
            return;
        }
        await setDefaultTemplate.mutateAsync(templateId);
    };
    if (isLoading) {
        return (_jsx("div", { className: "flex justify-center items-center py-8", children: _jsx(Loader2, { className: "h-8 w-8 animate-spin text-zion-purple" }) }));
    }
    if (!templates.length) {
        return (_jsxs("div", { className: "text-center py-8", children: [_jsx("p", { className: "text-muted-foreground", children: "No templates found." }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Save a contract as a template to reuse it later." })] }));
    }
    return (_jsxs("div", { className: "space-y-3", children: [templates.map((template) => (_jsx(Card, { className: template.is_default ? "border-zion-purple" : "", children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h3", { className: "font-medium", children: template.title }), template.is_default && (_jsx("span", { className: "bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full", children: "Default" }))] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: ["Last updated: ", new Date(template.updated_at).toLocaleDateString()] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => onEdit(template), children: _jsx(Edit, { className: "h-4 w-4" }) }), !template.is_default ? (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleSetDefault(template.id), children: _jsx(Star, { className: "h-4 w-4" }) }) }), !user && (_jsx(TooltipContent, { children: "Please log in to use this feature" }))] }) })) : (_jsx(Button, { variant: "ghost", size: "icon", disabled: true, children: _jsx(StarOff, { className: "h-4 w-4" }) })), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleDeleteClick(template.id), children: _jsx(Trash, { className: "h-4 w-4 text-destructive" }) })] })] }), _jsx(Separator, { className: "my-3" }), _jsx(Button, { onClick: () => onSelect(template), variant: "outline", className: "w-full", children: "Use This Template" })] }) }, template.id))), _jsx(AlertDialog, { open: !!templateToDelete, onOpenChange: () => setTemplateToDelete(null), children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Delete Template" }), _jsx(AlertDialogDescription, { children: "Are you sure you want to delete this template? This action cannot be undone." })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: "Cancel" }), _jsx(AlertDialogAction, { className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", onClick: handleDeleteConfirm, children: "Delete" })] })] }) })] }));
}
