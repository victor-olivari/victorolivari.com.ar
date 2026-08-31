# victorolivari.com.ar

Sitio de Víctor Olivari — corredor inmobiliario y abogado, Resistencia, Chaco.

Hub que presenta las tres unidades (Bienes Raíces, Servicios jurídicos y
Capacitaciones) y deriva a cada una.

## Cómo se publica

Este repositorio contiene **sólo el sitio ya generado**. No se edita a mano: sale
de los artboards de diseño del proyecto, con

```
python3 herramientas/publicar-sitio.py
```

Cada carpeta es una dirección (`/bienes-raices`, `/contacto`, …). Las fotos van en
WebP y las que no se ven al entrar se cargan sólo al llegar a ellas.

Se sirve con GitHub Pages sobre el dominio propio declarado en `CNAME`.
