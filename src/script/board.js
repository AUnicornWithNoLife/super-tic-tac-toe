function generateBoard(x, y, z)
{
    if (z < 1)
    {
        return "";
    }

    o = "<table>"

    for (var ix = 0; ix < x; ix++)
    {
        o += "<tr>"

        for (var iy = 0; iy < y; iy++)
        {
            o += "<th id='ttt_" + ix + "_" + iy + "_" + z + "'>"
            o += "<button onclick='move(" + ix + ", " + iy + ", " + z + ")' id='but_" + ix + "_" + iy + "_" + z + "'>_"

            o += generateBoard(x, y, z - 1)

            o += "</button></th>"
        }

        o += "</tr>"
    }

    return o + "</table>"
}

function move(x, y, z)
{
    console.log(x, y, z)
}