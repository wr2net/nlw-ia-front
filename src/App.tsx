import {FileVideo, Github, Upload, Wand2} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Slider} from "@/components/ui/slider.tsx";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.Ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido por Fawacom Soluções em TI Ltda.</span>
          <Separator orientation="vertical" className="h6" />
          <Button variant="outline">
            <Github className="m-4 h4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="gird grid-row-2 gap-4 flex-1">
            <Textarea
              placeholder="Inclua o prompt para a IA..."
              className="resize-name p-4 leading-relaxed"
            />
            <Textarea
              placeholder="Resultado gerado pela IA..."
              className="resize-name p-4 leading-relaxed"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code>
            no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed textg-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo />
              Selecione um Vídeo
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />
            <Separator />

            <div className="space-y-2">
              <label htmlFor="transcription_prompt">
                Prompt de transcrição
              </label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavra-chave mencionadas no vídeo separados por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar Vídeo
              <Upload className="m-4 h-4 ml-2" />
            </Button>

          </form>
          <Separator />

          <form className="space-y-6">

            <div className="space-y-2 ">
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do YouTube</SelectItem>
                  <SelectItem value="description">Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-2 ">
              <Label>Modelo</Label>

              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider
                min={0}
                max={1}
                step={0.1}
              />

              <span className="block text-xs text-muted-foreground italic">
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
              </span>
            </div>

            <Separator/>

            <Button type='submit' className="w-full">
              Executar
              <Wand2 className="m-4 h-4 ml-2" />
            </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}
























