import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import { Package, Truck, Map, Scan, Printer, XCircle, RotateCcw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Package {
  id: string;
  code: string;
  clientName: string;
}

const RouteManifest = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [carrierInfo, setCarrierInfo] = useState({ id: "", name: "" });

  const handleAddPackage = () => {
    // This will be implemented with actual barcode scanning later
    const mockPackage = {
      id: `PKG-${Math.random().toString(36).substr(2, 9)}`,
      code: `BC-${Math.random().toString(36).substr(2, 9)}`,
      clientName: "Client Name",
    };
    setPackages([...packages, mockPackage]);
  };

  const handleRemovePackage = (packageId: string) => {
    setPackages(packages.filter((pkg) => pkg.id !== packageId));
  };

  const handleReverseManifest = () => {
    // This will be implemented with actual manifest reversal logic later
    console.log("Reversing manifest");
  };

  const handlePrintManifest = () => {
    // This will be implemented with actual printing logic later
    console.log("Printing manifest");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Manifesto de Rota
            </h1>
            <div className="space-x-2">
              <Button variant="outline" onClick={handleReverseManifest}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Reverter
              </Button>
              <Button variant="outline" onClick={handlePrintManifest}>
                <Printer className="mr-2 h-4 w-4" />
                Imprimir
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Map className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="routeBarcode">Código de Barras da Rota</Label>
                  <Input id="routeBarcode" placeholder="Escaneie o código da rota" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Truck className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="carrierId">ID do Portador</Label>
                  <Input 
                    id="carrierId" 
                    placeholder="Escaneie o ID do portador"
                    value={carrierInfo.id}
                    onChange={(e) => setCarrierInfo({ ...carrierInfo, id: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Package className="text-gray-500" />
                <div className="flex-1">
                  <Label htmlFor="packageBarcode">Código do Malote</Label>
                  <Input id="packageBarcode" placeholder="Escaneie o código do malote" />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center" onClick={handleAddPackage}>
                  <Scan className="mr-2" />
                  Adicionar Malote
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Malotes no Manifesto</Label>
              <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Código</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead className="w-[100px]">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {packages.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-gray-500 dark:text-gray-400">
                          Nenhum malote adicionado
                        </TableCell>
                      </TableRow>
                    ) : (
                      packages.map((pkg) => (
                        <TableRow key={pkg.id}>
                          <TableCell>{pkg.code}</TableCell>
                          <TableCell>{pkg.clientName}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemovePackage(pkg.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button variant="outline">Cancelar</Button>
            <Button>Fechar Manifesto</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RouteManifest;
