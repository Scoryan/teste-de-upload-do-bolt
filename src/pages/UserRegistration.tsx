import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import { User, Mail, Key, UserCheck } from "lucide-react";

const UserRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Cadastro de Usuário
          </h1>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="iduser">ID do Usuário</Label>
                  <Input id="iduser" placeholder="Digite o ID do usuário" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <UserCheck className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="rg">RG</Label>
                  <Input id="rg" placeholder="Digite o RG" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Key className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" placeholder="Digite a senha" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <User className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Digite o nome completo" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="Digite o e-mail" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <User className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="greeting">Saudação</Label>
                  <Input id="greeting" placeholder="Digite a saudação" />
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="active" />
                <Label htmlFor="active">Ativo</Label>
              </div>

              <div className="space-y-2">
                <Label>Permissões</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="perm1" />
                    <Label htmlFor="perm1">Cadastros</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="perm2" />
                    <Label htmlFor="perm2">Relatórios</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button variant="outline">Pesquisar</Button>
              <Button variant="outline">Editar</Button>
              <Button>Salvar</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UserRegistration;
