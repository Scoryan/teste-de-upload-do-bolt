import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const SupplierRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Cadastro de Fornecedor
          </h1>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Building2 className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="domain">Domínio</Label>
                  <Input id="domain" placeholder="Digite o domínio" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Building2 className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="Digite o CNPJ" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Building2 className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="companyName">Razão Social</Label>
                  <Input id="companyName" placeholder="Razão Social" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Building2 className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="tradeName">Nome Fantasia</Label>
                  <Input id="tradeName" placeholder="Nome Fantasia" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Building2 className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="stateRegistration">Inscrição Estadual</Label>
                  <Input id="stateRegistration" placeholder="Inscrição Estadual" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="exempt" />
                  <Label htmlFor="exempt">Isento</Label>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Endereço</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-gray-500" />
                    <div className="flex-1">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="CEP" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" placeholder="Rua" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-1">
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="Número" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Complemento" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex-1">
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Bairro" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Cidade" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="state">UF</Label>
                    <Input id="state" placeholder="UF" />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="collectionEmail">E-mail Coleta</Label>
                  <Input id="collectionEmail" type="email" placeholder="E-mail para coleta" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="trackingEmail">E-mail Tracking</Label>
                  <Input id="trackingEmail" type="email" placeholder="E-mail para tracking" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="phone">Telefone de Contato</Label>
                  <Input id="phone" placeholder="Telefone" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="active" />
                <Label htmlFor="active">Ativo</Label>
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

export default SupplierRegistration;
