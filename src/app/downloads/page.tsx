import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FolderOpen,
  FolderLock,
  TabletSmartphoneIcon,
  Download,
  GitBranch,
  ExternalLink,
  Waypoints,
} from "lucide-react";
import Link from "next/link";

export default function Downlaods() {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto h-[calc(100vh-4rem)]">
      <h2>Downloads</h2>
      <p className="text-muted-foreground">
        Aqui você encontra todos os arquivos disponíveis para download.
      </p>
      <Table className="my-20">
        <TableCaption>Lista de downloads</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Arquivo</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <FolderOpen className="inline mr-2" size={20} />
              Conteúdo Público
            </TableCell>
            <TableCell className="text-muted-foreground">
              Ferramentas e arquivos externos
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Acessar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <FolderLock className="inline mr-2" size={20} />
              Conteúdo Privado
            </TableCell>
            <TableCell className="text-muted-foreground">
              Acesso interno para colaboradores
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-privado"
                className="text-nedel-blue hover:underline"
              >
                Acessar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <TabletSmartphoneIcon className="inline mr-2" size={20} />
              Aplicações Android
            </TableCell>
            <TableCell className="text-muted-foreground">
              Instaladores para dispositivos Android
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Baixar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <Download className="inline mr-2" size={20} />
              Instaladores do Sistema
            </TableCell>
            <TableCell className="text-muted-foreground">
              Executáveis para instalação
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Baixar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <GitBranch className="inline mr-2" size={20} />
              Versões do Digiadm
            </TableCell>
            <TableCell className="text-muted-foreground">
              {" "}
              Todas as versões da aplicação Digiadm
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Baixar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <ExternalLink className="inline mr-2" size={20} />
              Acesso Remoto
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Baixar
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <Waypoints className="inline mr-2" size={20} />
              Radmin VPN
            </TableCell>
            <TableCell className="text-muted-foreground">
              Rede Privada Virtual para acesso externo
            </TableCell>
            <TableCell className="text-right">
              <Link
                href="conteudo-publico"
                className="text-nedel-blue hover:underline"
              >
                Baixar
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
